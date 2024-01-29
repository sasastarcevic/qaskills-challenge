# QASkills Challenge


1. **<span style="color:red;">PREREQUISITE</span>**
 Setup you local environment before starting with challenge see [documentation](docs/README.md)


2. QASkills Challenge is splitted into three parts

    - Manual Test Challenge
    - Unit Test Challenge
    - Rest Api Test Challenge

3. Create new branch with command [read more](docs/create-branch.md)
```
git checkout -b challenge/firstNameLastName
```

---

4. Manual Test Challenge

    - If application is started correctly you should see next:

    ![alt text](images/demo-fe-app.png)

    - Write at least 5-7 test cases which are mandatory by your opinion
    - Each test case should be separated file and stored inside folder 'manual-test-challenge'
    - You can use your template or one example provided by use
    - First test case is  [DFA-1 - Demo Frontend App is displayed](manual-test-challenge/DFA-1.md)

---

5. Unit Test Challenge

    - Open new terminal
    - Go to folder with command: 'cd unit-test-challenge'
    - Install dependencies with command: 'npm install'
    - Run test with command: 'npm test'
    - Inside folder 'unit-test-challenge' there is a test.js file. Go there and add missing tests.
    - There will be some failed tests without making any changes: 

        <details>
        <summary>Unit Test Failed Logs </summary>
        
        ```bash
        sasas@latitude-5491:~/Development/qaskills-free-guide/unit-test-challenge$ npm test

        > unit-test-challenge@1.0.0 test /home/sasas/Development/qaskills-free-guide/unit-test-challenge
        > mocha



        Unit tests - that check conversion of a Roman numeral to an integer
            ✓ should return 3 for the Roman numeral "III"
            1) should return 4 for the Roman numeral "IV"
            2) should return 9 for the Roman numeral "IX"
            3) should return 58 for the Roman numeral "LVIII"
            4) should return 1994 for the Roman numeral "MCMXCIV"


        1 passing (5ms)
        4 failing

        1) Unit tests - that check conversion of a Roman numeral to an integer
            should return 4 for the Roman numeral "IV":
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:40:12)
            at processImmediate (internal/timers.js:439:21)

        2) Unit tests - that check conversion of a Roman numeral to an integer
            should return 9 for the Roman numeral "IX":
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:45:12)
            at processImmediate (internal/timers.js:439:21)

        3) Unit tests - that check conversion of a Roman numeral to an integer
            should return 58 for the Roman numeral "LVIII":
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:50:12)
            at processImmediate (internal/timers.js:439:21)

        4) Unit tests - that check conversion of a Roman numeral to an integer
            should return 1994 for the Roman numeral "MCMXCIV":
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:55:12)
            at processImmediate (internal/timers.js:439:21)



        npm ERR! Test failed.  See above for more details.


        ```
        </details>


---

6. Rest Api Test Challenge

    - Open new terminal
    - Go to folder with command: 'cd rest-api-test-challenge'
    - Install dependencies with command: 'npm install'
    - Run test with command: 'npm test'
    - Inside folder 'rest-api-test-challenge' there is a test.js file. Go there and add missing tests.
    - There will be some failed tests without making any changes: 

        <details>
        <summary>RestApi Test Failed Logs </summary>
        
        ```bash
        sasas@latitude-5491:~/Development/qaskills-free-guide/rest-api-test-challenge$ npm test

        > rest-api-test-challenge@1.0.0 test /home/sasas/Development/qaskills-free-guide/rest-api-test-challenge
        > mocha



        Rest Api Tests
            ✓ Get specific post with id 1
            1) Get vehicle with not existin id 9876
            2) Get vehicle with not existin id 9876
            3) Add new post
            4) Add new post with bad request
            5) Update added vehicle


        1 passing (21ms)
        5 failing

        1) Rest Api Tests
            Get vehicle with not existin id 9876:
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:19:12)
            at processImmediate (internal/timers.js:439:21)

        2) Rest Api Tests
            Get vehicle with not existin id 9876:
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:24:12)
            at processImmediate (internal/timers.js:439:21)

        3) Rest Api Tests
            Add new post:
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:29:12)
            at processImmediate (internal/timers.js:439:21)

        4) Rest Api Tests
            Add new post with bad request:
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:34:12)
            at processImmediate (internal/timers.js:439:21)

        5) Rest Api Tests
            Update added vehicle:
            AssertionError [ERR_ASSERTION]: 'remove this line' == 1
            at Context.<anonymous> (test.js:39:12)
            at processImmediate (internal/timers.js:439:21)



        npm ERR! Test failed.  See above for more details.

        ```
        </details>

----


7. After completing your challenge, next step would be to commit and push changes to you branch

8. Add files to stage with command [read more](docs/add-all-files-to-stage.md)
```
git add -A
```

9. Create commit message [read more](docs/commit-message.md)
```
git commit -m "Initial version for QASkills Challenge"
```

10. Push to new branch ( use your branch created in step 3) [read more](docs/push-branch.md)
```
git push origin challenge/firstNameLastName
```

11. After completing you challenge send us an message with email used for logging on https://qaskills.io . Include you cv as attachment in this mail (not mandatory) , that we can check and maybe suggest some improvments so that you are more prepared for real D-day:
```
Send to:
office@qaskills.io

Subject:
QASkills Challenge - FirstName LastName

Message:
Hi QASkills,


 - I have completed challenge and pushed it to branch "challenge/firstNameLastName" (update branch name).

 - Add you cv as attachment.


BR,
FirstName LastName

```

Happy learning!  🚀 📚

See Ya on a Demo Interview session!

Your qaskills.io team 🍀