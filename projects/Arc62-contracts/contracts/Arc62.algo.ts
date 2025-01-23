/* eslint-disable camelcase */
import { Contract } from '@algorandfoundation/tealscript';
import * as err from './errors';

/**
 * ARC-62 Reference Implementation
 */
export class CirculatingSupply extends Contract {
  asset_id = GlobalStateKey<uint64>({ key: 'asset_id' });

  not_circulating_label_1 = GlobalStateKey<Address>({ key: 'burned' });

  not_circulating_label_2 = GlobalStateKey<Address>({ key: 'locked' });

  not_circulating_label_3 = GlobalStateKey<Address>({ key: 'generic' });

  createApplication(): void {
    this.asset_id.value = 0;

    this.not_circulating_label_1.value = globals.zeroAddress;

    this.not_circulating_label_2.value = globals.zeroAddress;

    this.not_circulating_label_3.value = globals.zeroAddress;
  }

  /**
   * Set the ASA ID for the circulating supply - Authorization: ASA Manager Address
   * @param asset_id ASA ID of the circulating supply
   */
  set_asset(asset_id: uint64): void {
    const asset = AssetID.fromUint64(asset_id);
    assert(this.txn.sender === asset.manager && !this.asset_id.value, err.UNAUTHORIZED);
    this.asset_id.value = asset_id;
  }

  /**
   * Set non-circulating supply addresses - Authorization: ASA Manager Address
   * @param address Address to assign to the label to
   * @param label Not-circulating label selector
   */
  set_not_circulating_address(address: Address, label: string): void {
    const asset = AssetID.fromUint64(this.asset_id.value);
    assert(this.txn.sender === asset.manager, err.UNAUTHORIZED);
    assert(address.isOptedInToAsset(asset), err.NOT_OPTED_IN);

    if (label === 'burned') {
      this.not_circulating_label_1.value = address;
    } else if (label === 'locked') {
      this.not_circulating_label_2.value = address;
    } else if (label === 'generic') {
      this.not_circulating_label_3.value = address;
    } else {
      assert(false, err.INVALID_LABEL);
    }
  }

  /**
   * Get ASA circulating supply
   * @param asset_id ASA ID of the circulating supply
   * @returns ASA circulating supply
   */
  @abi.readonly
  arc62_get_circulating_supply(asset_id: uint64): uint64 {
    const asset = AssetID.fromUint64(asset_id);
    assert(this.asset_id.value === asset.id, err.INVALID_ASSET_ID);

    let reserveBalance: uint64 = 0;
    let notCirculatingLabel1Balance = 0;
    let notCirculatingLabel2Balance = 0;
    let notCirculatingLabel3Balance = 0;

    if (asset.reserve === globals.zeroAddress || asset.reserve.isOptedInToAsset(asset) === false) {
      reserveBalance = 0;
    } else {
      reserveBalance = asset.reserve.assetBalance(asset);
    }

    if (
      this.not_circulating_label_1.value === globals.zeroAddress ||
      this.not_circulating_label_1.value.isOptedInToAsset(asset) === false
    ) {
      notCirculatingLabel1Balance = 0;
    } else {
      notCirculatingLabel1Balance = this.not_circulating_label_1.value.assetBalance(asset);
    }

    if (
      this.not_circulating_label_2.value === globals.zeroAddress ||
      this.not_circulating_label_2.value.isOptedInToAsset(asset) === false
    ) {
      notCirculatingLabel2Balance = 0;
    } else {
      notCirculatingLabel2Balance = this.not_circulating_label_2.value.assetBalance(asset);
    }

    if (
      this.not_circulating_label_3.value === globals.zeroAddress ||
      this.not_circulating_label_3.value.isOptedInToAsset(asset) === false
    ) {
      notCirculatingLabel3Balance = 0;
    } else {
      notCirculatingLabel3Balance = this.not_circulating_label_3.value.assetBalance(asset);
    }

    return (
      asset.total -
      reserveBalance -
      notCirculatingLabel1Balance -
      notCirculatingLabel2Balance -
      notCirculatingLabel3Balance
    );
  }
}
