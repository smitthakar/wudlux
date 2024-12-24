import React from "react";

const index = () => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone:
          <input type="number" name="phone" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default index;
