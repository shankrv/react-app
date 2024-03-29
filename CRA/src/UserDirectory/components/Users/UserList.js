import Card from '../General/Card';
import classes from './UserList.module.css';

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
