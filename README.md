# projectx-frontend
If there are any questions or if something is confused/not explained do please let me know.
If there any endpoints or any refactoring of the backed you want done to make your life easier again let me know and I'll add them.




If cookie "auth_token" does not exist redirect to "https://login.rhysevans.co.uk/signin"     


Use Layout: Layouts > Sidebar A

Left SideBar navigation to consist of
- Profile Photo menu 
  - My Profile 
  - Sign out - just delete the cookie and redirect to above URL
- "Dashboard"
- "Links" 
- "WorkSnippets" (Only for Supply teachers)
- "Custom Pages" (Only for Supply teachers - mapped to SupplyTeacherPageView)

# 1) Dashboard Page
- Based on the Dashboard > Analyitcs template in airframe and consist of a couple of widgets 
  1) Count of Teachers
  2) Count of Supply Teachers 
  3) Count of Worksnippets
  4) A graph only visible for Supply Teachers to show how many worksnippets grouped by tags
  5) A graph displaying tag counts by total number of worksnippets across all supplyteacher from the endpoint
     (I can wrap this in an additional endpoint if it's easier/quicker)

# 2) Profile page
- based on Apps > Profile > Profile Edit template in airframe
- Must support both Teacher and Supply Teacher (Whether it's easier to create two separate pages to make life easier - your call)
- Support fields in the models
- Following fields are/will be read only
  - [Teacher + supply teacher] Profile photo
  - [supply teacher] supplyTeacherProfileId (ignore this)
  - [Teacher + supply teacher] id (ignore)
  - [Teacher + supply teacher] updated (ignore )
  - [Teacher + supply teacher] email - display but leave the element disabled
  - [Teacher] agency bool (will be updated on the backend on agency_name update)


# 3) Links page
- based on Apps > Clients template in airframe
  - Table using the tabs "Clients" & "Companies" should be split into;
    - Teacher (Only visible to Supply Teachers), columns should be 
      - Photo + Name, email + phone
    - Supply Teachers visible to all
      - Photo + Name, email + phone and top tags (there will be 3 "TopTagView" models returned from `supplyteacher/{id}/toptags` endpoint it would be great to display then in the badge like "keyword:count" e.g. "physics:10")
  - Profile section to the right would be updated when selecting a row in the table
    - Must also include a way to delete a `link`
    - Toggle for `favourite`
    - Labels should be replaced with tags

# 4) WorkSnippets (Only available to Supply Teachers)
- mapped to WorkSnippetView model
- Based on Apps > Tasks > Tasks List template in airframe. I'm not concerned by the grid/kanban views so ignore/remove those
- `Worksnippet/{id}/tags` needed to be pulled in and displayed as tags would be great to also include the description from the `/tag/{keyword}` endpoint as a tooltip
- Table should just contain columns Title, Tags, Published (Bool), Date, Last Updated
- A form will need to be created to create the worksnippets (I've created the endpoint such that the POST /worksnippet will return the object with an ID so PATCH updates can be done to make "drafts" UX easier)
  - For adding Tags to worksnippet it would be great to use the Forms > Typeahead > "Asynchronous Searching" or if it is too time consuming to implement default to "Controlling Selections" example
  - for content entry use Forms > Editor and Forms > date pickers

# 5) SupplyTeacher Pages (Only available to Supply Teachers)
- mapped to SupplyTeacherPageView model
- Based on Apps > Tasks > Tasks List template in airframe. I'm not concerned by the grid/kanban views so ignore/remove those
- `Worksnippet/{id}/tags` needed to be pulled in and displayed as tags would be great to also include the description from the `/tag/{keyword}` endpoint as a tooltip
- Table should just contain columns Title, Tags, Published (Bool), Date, Last Updated
- A form will need to be created to create the worksnippets (I've created the endpoint such that the POST /worksnippet will return the object with an ID so PATCH updates can be done to make "drafts" UX easier)
  - For adding Tags to worksnippet it would be great to use the Forms > Typeahead > "Asynchronous Searching" or if it is too time consuming to implement default to "Controlling Selections" example
  - for content entry use Forms > Editor and Forms > date pickers


Notifications:
As this is an after thought, not required but it would also be great to include if you can manage it a notification if there are errors returns from the API. The API will typically return
- 200, 400, 403, 500 HTTP status codes with a json "msg" field with the content of the message. It will be empty for 200 but will contain errors messages for failures.
Up to you if you want to implement or if you can implement it once just to show the customer as an example.


# Live API for Testing:
I've created a live API with test data. To log in and obtain a valid jwt token navigate to [https://api.rhysevans.co.uk/auth/signup?role=supplyteacher](https://api.rhysevans.co.uk/auth/signup?role=supplyteacher). It will redirect to LinkedIn and you must sign in and approve the flow.    

You will then be redirected to a landing page with a JWT token in the body and a new cookie called `access_token` with the jwt token in.
We may need to change the auth flow and I'm open to suggestions to make your life easier.


The `/account/generatefakedata` endpoint can be used to generate fake data associated with your account.
>NOTE: You will need curl and jq installed for this to work.

```
export JWT_TOKEN="<PASTE in your JWT TOKEN>"
export MY_ID=$(curl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${JWT_TOKEN}" \
  https://api.rhysevans.co.uk/account | jq -r .id)
curl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${JWT_TOKEN}" \
  "https://api.rhysevans.co.uk/account/generatefakedata/${MY_ID}"
```

You can find a Swagger UI here [https://api.jarvis.rhysevans.co.uk/swagger/index.html](https://api.jarvis.rhysevans.co.uk/swagger/index.html)    
and the OpenAPI/Swagger spec here [https://api.jarvis.rhysevans.co.uk/swagger/v1/swagger.json](https://api.jarvis.rhysevans.co.uk/swagger/v1/swagger.json).
