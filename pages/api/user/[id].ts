
import { getUserById } from "../../db/users"

export default async (req: any, res: any) => {
      // const idQuery = req.query
      const idQuery = parseInt(req.query.id)


      const getMyUser = await getUserById(idQuery)
      res.json(getMyUser)

}

