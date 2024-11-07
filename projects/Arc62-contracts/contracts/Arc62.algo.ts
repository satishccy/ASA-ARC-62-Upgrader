/* eslint-disable camelcase */
import { Contract } from '@algorandfoundation/tealscript';

export class Arc62 extends Contract {
  asset_id = GlobalStateKey<uint64>({ key: 'asset_id' });

  not_circulating_label_1 = GlobalStateKey<Address>({ key: 'burned' });

  not_circulating_label_2 = GlobalStateKey<Address>({ key: 'locked' });

  not_circulating_label_3 = GlobalStateKey<Address>({ key: 'generic' });

  createApplication(asset_id: uint64, burned: Address, locked: Address, generic: Address): void {
    const asset = AssetID.fromUint64(asset_id);
    assert(this.txn.sender === asset.manager, 'Only the asset manager can create an application');
    assert(this.asset_id.exists === false, 'Application already exists');
    this.asset_id.value = asset.id;
    this.not_circulating_label_1.value = burned;
    this.not_circulating_label_2.value = locked;
    this.not_circulating_label_3.value = generic;
  }

  set_not_circulating_address(address: Address, label: string): void {
    const asset = AssetID.fromUint64(this.asset_id.value);
    assert(this.txn.sender === asset.manager, 'Only the asset manager can set the not circulating address');

    if (label === 'burned') {
      this.not_circulating_label_1.value = address;
    } else if (label === 'locked') {
      this.not_circulating_label_2.value = address;
    } else if (label === 'generic') {
      this.not_circulating_label_3.value = address;
    } else {
      assert(false, 'Invalid label');
    }
  }

  arc62_get_circulating_supply(asset_id: uint64): uint64 {
    const asset = AssetID.fromUint64(asset_id);
    assert(this.asset_id.value === asset.id, 'Invalid assetId');

    let reserveBalance: uint64 = 0;
    let not_circulating_label_1_balance = 0;
    let not_circulating_label_2_balance = 0;
    let not_circulating_label_3_balance = 0;

    if (asset.reserve === globals.zeroAddress || asset.reserve.isOptedInToAsset(asset_id) === false) {
      reserveBalance = 0;
    } else {
      reserveBalance = asset.reserve.assetBalance(asset);
    }

    if (
      this.not_circulating_label_1.exists === false ||
      this.not_circulating_label_1.value.isOptedInToAsset(asset_id) === false ||
      this.not_circulating_label_1.value === globals.zeroAddress
    ) {
      not_circulating_label_1_balance = 0;
    } else {
      not_circulating_label_1_balance = this.not_circulating_label_1.value.assetBalance(asset);
    }

    if (
      this.not_circulating_label_2.exists === false ||
      this.not_circulating_label_2.value.isOptedInToAsset(asset_id) === false ||
      this.not_circulating_label_2.value === globals.zeroAddress
    ) {
      not_circulating_label_2_balance = 0;
    } else {
      not_circulating_label_2_balance = this.not_circulating_label_2.value.assetBalance(asset);
    }

    if (
      this.not_circulating_label_3.exists === false ||
      this.not_circulating_label_3.value.isOptedInToAsset(asset_id) === false ||
      this.not_circulating_label_3.value === globals.zeroAddress
    ) {
      not_circulating_label_3_balance = 0;
    } else {
      not_circulating_label_3_balance = this.not_circulating_label_3.value.assetBalance(asset);
    }

    return (
      asset.total -
      reserveBalance -
      not_circulating_label_1_balance -
      not_circulating_label_2_balance -
      not_circulating_label_3_balance
    );
  }
}
