# ToDo App

This app should have the following features:

- [x] Display a To-Do list created by the user
- [x] The user should be able to add/remove To-Do's
- [x] The user should be able to toggle To-Do's between completed/pending
- [x] Sign in/out and Register feature
- [x] Save To-Do's on the backend
- [x] Filter To-Do's by all/completed/pending
- [ ] optional: add a deadline when creating a new To-Do 

### Week July 10th to July 16th
- [X] Create mock Register feature without a server
- [x] Create mock Sign In feature without a server
- [x] Create Sign Out option
- [x] Show mock To-Do's
- [x] Toggle To-Do state (completed/pending)
- [x] Add/Remove To-Do
- [x] Create a filter (all/completed/pending)
- [x] Integrate BackEnd

```mermaid
    gantt 
        title To-Do Project Schedule
        dateFormat MM-DD
        axisFormat %m-%d
        
        section Frontend
            Mock Register                   :done, 07-10, 1d
            Mock Sign In                    :done, 07-11, 1d
            Sign out                        :done, 07-11, 1d
            Mock To-Do's                    :done, 07-12, 1d
            Toggle/Add/Remove To-Do's       :done, 07-13, 1d
            Filter                          :done, 07-15, 1d
            BackEnd                         :done, 07-16, 1d

        section Testing
            Test Mock Register              :done, 07-10, 1d
            Test Mock Sign In               :done, 07-11, 1d
            Test Sign out                   :done, 07-11, 1d
            Test Mock To-Do's               :07-12, 1d
            Test Toggle/Add/Remove To-Do's  :07-13, 1d
            Test Filter                     :done, 07-15,1d
```