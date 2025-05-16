export interface APIResponse<T> {
    data: T
    message: String
    success: Boolean
}