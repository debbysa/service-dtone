import { CalculationMode } from "./enum";

export interface ItransactionCreate {
  external_id: string;
  product_id: number;
  calculation_mode?: CalculationMode;
  source?: ISourceandDestinationType;
  destination?: ISourceandDestinationType;
  auto_confirm: boolean;
  sender: ISenderandBeneficiary;
  beneficiary: ISenderandBeneficiary;
  debit_party_identifier: IdebitandCreditPartyIdentifier;
  credit_party_identifier: IdebitandCreditPartyIdentifier;
  callback_url?: undefined;
}

interface ISourceandDestination {
  unit_type: "CURRENCY";
  unit: string;
  amount: number;
}

export type ISourceandDestinationType = Omit<
  ISourceandDestination,
  "unit_type"
>;

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
