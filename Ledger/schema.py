from graphene import ObjectType, Schema

import backend.schema
import authentication.schema


class Query(backend.schema.Query, ObjectType):
    pass


class Mutation(authentication.schema.Mutation, ObjectType):
    pass


schema = Schema(query=Query, mutation=Mutation)
