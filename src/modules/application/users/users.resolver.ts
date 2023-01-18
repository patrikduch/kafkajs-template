import { Query, Resolver} from '@nestjs/graphql';

@Resolver()
class UsersResolver {

    @Query(() => String) 
    async hello() {
        return 'Hello';
    }
}

export default UsersResolver;