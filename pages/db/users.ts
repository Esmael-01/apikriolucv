import { prisma } from "./db";


//CREATING USERS
export async function createUsersDB(username: string, email: string, password: string) {

      return await prisma.user.create({
            data: {
                  username, email, password
            }
      })


}

//FETCHING ALL USERS
export async function getAllUsers() {
      return prisma.user.findMany();
}

//FETCHING ALL USERS
export async function getUserById(idUser: number) {

      return prisma.user.findUnique({
            where: {
                  id: idUser
            },
      }

      );
}







