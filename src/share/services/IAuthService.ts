export interface IAuthService {
    verifyToken(token: String): Promise<{success: Boolean, userId: String}>
}