// Authentication Models

export interface User {
    id: number;
    email: string;
    name: string;
}

// Ledger Models

export interface Account {
    AccountUID: number; // Primary Key
    accountID: number;
    currentBalance: number;
    name: string;
    type: string;
    user: User; // Foreign Key
}

export interface Transaction {
    transactionUID: number; // Primary Key
    transactionID: number;
    amount: number;
    date: string;
    categoryID: number;
    merchantName: string;
    merchantLocation: string;
    account: Account; // Foreign Key
}

// Redux Models

export interface AuthReduxProps {
    auth: {
        isAuthenticated: boolean;
        user: User;
    };
    error: ErrorState;
}

export interface ComponentReduxProps extends AuthReduxProps {
    data: {
        allTransactions?: Transaction[];
    };
    error: ErrorState;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface GlobalState {
    auth: AuthState;
    data: DataState;
    error: ErrorState;
}

export interface AuthState {
    access: string | null;
    refresh: string | null;
    isAuthenticated: boolean;
    user: User | any;
    isLoading: boolean;
}

export interface DataState {
    allTransactions: Transaction[];
}

export interface ErrorState {
    msg: {
        msg: string | null;
    };
    status: string | null;
    id: number;
}
