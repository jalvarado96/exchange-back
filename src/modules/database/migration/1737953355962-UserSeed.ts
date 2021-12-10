import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserSeed } from '../seed/user.seed';
import * as bcrypt from 'bcrypt'

export class UserSeed1637953355962 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersSeed: any[] = UserSeed;
    const salt = bcrypt.genSaltSync(10);
    let userToSave = {
      address: '',
      city: '',
      state: '',
      birthdate: '',
      phonenumber: '',
      username: '',
      lastname: '',
      selfie: '',
      dniFront: '',
      dniBack: '',
      documentDate: '',
      documentType: '',
      documentNumber: '',
      recoverHash: ''
    }

    for (let user of usersSeed) {
      const role = await getRepository('role').findOne({ name: user.role });
      if (role) {
        user.role = role;
        user.password = bcrypt.hashSync(user.password, salt);
        userToSave = {
          ...user,
          userToSave
        }
        await getRepository('user').save(userToSave)
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }
}
