

import { createUsersDB } from "../../db/users";

export default async (req: any, res: any) => {
      const { username, email, password } = req.body;

      const createUser = await createUsersDB(username, email, password)
      res.json(createUser)

}

