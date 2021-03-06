import { IAccount } from 'core/account';

export interface IAccountSelectFieldProps {
  accounts: IAccount[] | string[];
  component: Object;
  field: string;
  provider: string;
  loading?: boolean;
  onChange?: (account: string) => void;
  labelColumns?: number;
  readOnly?: boolean;
  multiselect?: boolean;
}
