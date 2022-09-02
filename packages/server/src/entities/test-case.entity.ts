import { Column, Entity, ObjectIdColumn } from "typeorm";
import { TestCasePriority } from "./test-case-priority.entity";
import { TestCaseType } from "./test-case-type.entity";

@Entity()
export class TestCase {
    @ObjectIdColumn()
    id?: string;

    @Column()
    description: string;

    // @Column()
    // type: TestCaseType;

    // @Column()
    // priority: TestCasePriority;

    @Column()
    precondition: string;
}