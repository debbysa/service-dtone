export interface ItransactionCreate {
  external_id: string;
  product_id: number;
  auto_confirm: boolean;
  sender: ISenderandBeneficiary;
  beneficiary: ISenderandBeneficiary;
  debit_party_identifier: IdebitandCreditPartyIdentifier;
  credit_party_identifier: IdebitandCreditPartyIdentifier;
  callback_url: string;
}

export interface ISenderandBeneficiary {
  last_name: string;
  first_name: string;
  middle_name: string;
  nationality_country_iso_code: string;
  mobile_number: string;
  email: string;
}

export interface IdebitandCreditPartyIdentifier {
  mobile_number: string;
  account_number: string;
}
