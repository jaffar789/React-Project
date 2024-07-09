function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6 fs">{todoName}</div>
        <div class="col-4 fs">{todoDate}</div>
        <div class="col-2 fs">
          {/* <button type="button" class="btn btn-danger kg-button">
            Delete
          </button> */}
          <button type="button" class="btn btn-outline-warning kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
