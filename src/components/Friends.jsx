const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
    </tr>
  );
};

export const Friends = (props) => {
    let users = props.function();
    console.log(users);
  let usersCount = Object.keys(users).length;
  let usersRow = [];
  for (let i = 0; i < usersCount; i++) {
    usersRow.push(<TableRow key={i} index={i} name={users[i].name} lastname={users[i].lastname} />);
  }

  return (
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
            </tr>
          </thead>
          <tbody>
             {usersRow}
          </tbody>
        </table>
      </div>
    </div>
  );
};
