export type OperationFunction = (a: any, b?: any, c?: any) => boolean;
export type ConditionParams = [any, string, any?, boolean?];
export interface OperationEntry {
    operation: string;
    function: OperationFunction;
}
export declare const operationList: OperationEntry[];
