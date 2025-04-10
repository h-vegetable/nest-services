import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _key: string;

  @Column('text')
  id: string;

  @Column({ length: 255 })
  name: string;
  // age: number;

  @Column()
  password: string;
}
