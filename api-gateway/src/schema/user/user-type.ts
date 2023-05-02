import "reflect-metadata";
import { Field, ObjectType, ID, } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    Names: string;

    @Field()
    LastNames: string;

    @Field()
    PhotoId: number;

    @Field()
    EMail: string;

    @Field()
    Status: number;

    @Field()
    PhoneNumber: string;
}


@ObjectType()
export class SavedElement{
    @Field(() => ID)
    id: number;

    @Field()
    IDUser: number;

    @Field()
    IDElement: number;

    @Field()
    IDType: number;
}

