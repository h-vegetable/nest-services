import { Column, Entity } from 'typeorm';

@Entity()
export class User {
  @Column('text')
  name: string;
}
