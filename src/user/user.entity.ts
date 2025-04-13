import { Logs } from 'src/logs/logs.entity';
import { Roles } from 'src/roles/roles.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: number;

  //   @OneToMany(() => Logs, (logs) => logs.user)
  //   logs: Logs[];

  //   @OneToMany(() => Roles, (roles) => roles.user)
  //   roles: Roles[];

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
