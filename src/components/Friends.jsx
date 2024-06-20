
import PropTypes from 'prop-types';

const TableRow = (props) => {
    TableRow.propTypes = {
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
    }
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
    </tr>
  );
};

export const Friends = (data) => {
  let users = data.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let usersRow = [];
  for (let i = 0; i < usersCount; i++) {
    usersRow.push(<TableRow key={i} index={i} name={users[i].name} lastname={users[i].lastname} />);
  }

  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
            </tr>
          </thead>
          <tbody>{usersRow}</tbody>
        </table>
      </div>
    </div>
  );
};
