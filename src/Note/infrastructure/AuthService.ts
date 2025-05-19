import { IAuthService } from "../../share/services/IAuthService";

export class AuthService implements IAuthService {

    async verifyToken(token: String): Promise<{ success: Boolean; userId: String; }> {
        let res = {
            userId: "12321",
            success: true
        }
        // await fetch("url", {
        //     body: JSON.stringify({token})
        // }).then(res => res.json())
        // .then(data => {
        //     res.success = true
        //     res.userId = data.userId
        // })

        return res
    }
}