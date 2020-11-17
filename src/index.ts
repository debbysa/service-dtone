import { Config } from "./classes/Config";
import { BalancesDTOne } from "./classes/Balances-dtone";
import { ProductDTOne } from "./classes/Product-dtone";
import { TransactionDTOne } from "./classes/Transaction-dtone";
import { ProductType } from "./interfaces/enum";
import {
  ItransactionCreate,
  ISenderandBeneficiary,
  IdebitandCreditPartyIdentifier,
} from "./interfaces/transaction-dtone.interface";

export {
  Config,
  ProductDTOne,
  BalancesDTOne,
  TransactionDTOne,
  // interface
  ProductType,
  ItransactionCreate,
  ISenderandBeneficiary,
  IdebitandCreditPartyIdentifier,
};
