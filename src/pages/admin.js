import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { createClient } from "contentful-management";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    if (password === process.env.ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      console.log("wrong password");
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  const connectToContentful = async () => {
    let client = await createClient({
      accessToken: process.env.CONTENTFUL_UPDATE_TOKEN,
    });
    let space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    return await space.getEnvironment("master");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const stage1First8Price = Number(e.target.stage1First8Price.value);
    const stage1Second8Price = Number(e.target.stage1Second8Price.value);
    const stage1TrialLength = e.target.stage1TrialLength.value;
    const stage1TrialPrice = Number(e.target.stage1TrialPrice.value);
    const stage21To1Price = Number(e.target.stage21To1Price.value);
    const stage22To1Price = Number(e.target.stage22To1Price.value);

    let env = await connectToContentful();
    let content = await env.getEntry(process.env.CONTENT_ID);
    content.fields.stage1First8LessonsPrice["en-US"] = stage1First8Price;
    content.fields.stage1Second8LessonsPrice["en-US"] = stage1Second8Price;
    content.fields.stage1TrialLessonLength["en-US"] = stage1TrialLength;
    content.fields.stage1TrialLessonPrice["en-US"] = stage1TrialPrice;
    content.fields.stage21To1LessonsPrice["en-US"] = stage21To1Price;
    content.fields.stage22To1LessonsPrice["en-US"] = stage22To1Price;
    await content.update();
    content = await env.getEntry(process.env.CONTENT_ID);
    await content.publish();
    console.log("content updated - you can now log out");
  };

  const data = useStaticQuery(graphql`
    query {
      allContentfulTuitionFees {
        edges {
          node {
            stage1First8LessonsPrice
            stage1Second8LessonsPrice
            stage1TrialLessonLength
            stage1TrialLessonPrice
            stage21To1LessonsPrice
            stage22To1LessonsPrice
          }
        }
      }
    }
  `);

  const tuitionFees = data.allContentfulTuitionFees.edges[0].node;

  return (
    <div className="admin__wrapper">
      <div className="admin__header">
        <div className="admin__header--top"></div>
        <div className="admin__header--bottom">
          <button type="button" className="admin__logout" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
      <div className="admin__content">
        {!authenticated && (
          <form className="admin__login" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button>Log in</button>
          </form>
        )}
        {authenticated && (
          <form className="admin__update" onSubmit={handleUpdate}>
            <div className="admin__field">
              <label htmlFor="stage1First8Price">
                Stage 1 - First 8 Lessons Price:
              </label>
              <input
                type="text"
                id="stage1First8Price"
                name="stage1First8Price"
                defaultValue={tuitionFees.stage1First8LessonsPrice}
              />
            </div>

            <div className="admin__field">
              <label htmlFor="stage1Second8Price">
                Stage 1 - Second 8 Lessons Price:
              </label>
              <input
                type="text"
                id="stage1Second8Price"
                name="stage1Second8Price"
                defaultValue={tuitionFees.stage1Second8LessonsPrice}
              />
            </div>

            <div className="admin__field">
              <label htmlFor="stage1TrialLength">
                Stage 1 - Trial Lesson Length:
              </label>
              <input
                type="text"
                id="stage1TrialLength"
                name="stage1TrialLength"
                defaultValue={tuitionFees.stage1TrialLessonLength}
              />
            </div>

            <div className="admin__field">
              <label htmlFor="stage1TrialPrice">
                Stage 1 - Trial Lesson Price:
              </label>
              <input
                type="text"
                id="stage1TrialPrice"
                name="stage1TrialPrice"
                defaultValue={tuitionFees.stage1TrialLessonPrice}
              />
            </div>

            <div className="admin__field">
              <label htmlFor="stage21To1Price">
                Stage 2 - 1-to-1 Lessons Price:
              </label>
              <input
                type="text"
                id="stage21To1Price"
                name="stage21To1Price"
                defaultValue={tuitionFees.stage21To1LessonsPrice}
              />
            </div>

            <div className="admin__field">
              <label htmlFor="stage22To1Price">
                Stage 2 - 2-to-1 Lessons Price:
              </label>
              <input
                type="text"
                id="stage22To1Price"
                name="stage22To1Price"
                defaultValue={tuitionFees.stage22To1LessonsPrice}
              />
            </div>
            <div className="admin__buttons">
              <button type="submit" className="admin__submit">
                Update
              </button>
              <button type="button" className="admin__cancel" onClick={logout}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="admin__footer"></div>
    </div>
  );
};

export default Admin;