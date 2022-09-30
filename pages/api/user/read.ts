import { getAllUsers } from "../../db/users";

export default async (req: any, res: any) => {
      const getUsers = await getAllUsers();

      res.json(getUsers)
}