# ToDo App

This app should have the following features:

- [ ] Display a To-Do list created by the user
- [ ] The user should be able to add/remove To-Do's
- [ ] The user should be able to toggle To-Do's between completed/pending
- [ ] Sign in/out and Register feature
- [ ] Save To-Do's on the backend
- [ ] Filter To-Do's by all/completed/pending
- [ ] optional: add a deadline when creating a new To-Do 

### Week July 10th to July 16th
- [ ] Create mock Register feature without a server
- [ ] Create mock Sign In feature without a server
- [ ] Create Sign Out option
- [ ] Show mock To-Do's
- [ ] Toggle To-Do's state (completed/pending)
- [ ] Add/Remove To-Do
- [ ] Create a filter (all/completed/pending)
- [ ] Integrate BackEnd

```mermaid
    gantt 
        title To-Do Project Schedule
        dateFormat MM-DD
        axisFormat %m-%d
        
        section Frontend
            Mock Register                   :active, 07-10, 1d
            Mock Sign In                    :07-11, 1d
            Sign out                        :07-11, 1d
            Mock To-Do's                    :07-12, 1d
            Toggle/Add/Remove To-Do's       :07-13, 1d
            Filter                          :07-15, 1d
            BackEnd                         :07-16, 1d

        section Testing
            Test Mock Register              :active, 07-10, 1d
            Test Mock Sign In               :07-11, 1d
            Test Sign out                   :07-11, 1d
            Test Mock To-Do's               :07-12, 1d
            Test Toggle/Add/Remove To-Do's  :07-13, 1d
            Test Filter                     :07-15,1d
```