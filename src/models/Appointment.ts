import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments') // Decorator passa a class como parametro para uma entidade
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;
