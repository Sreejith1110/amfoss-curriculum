## Exercise 1

This exercise was to start the git and verify .

git start master 
git verify
## Exercise 2

This exercise was to add a file named ‘A.txt’ and commit the file .

git add A.txt
git commit -m "Add text file A"
## Exercise 3

This exercise was to unstage the files and only commit one of the file which was staged.

git reset
git add A.txt
git commit -m "Add file A"
## Exercise 4

This exercise was about ignoring certain types of file like ‘ *.o ’ , ’ *.exe ’ , ’ *.jar ‘ and a file named ‘libraries’.

nano
"*.o
*.exe
*.jar
libraries/
file name : .gitignore"

git add .gitignore
git commit -m "ignore file"
## Exercise 5

This exercise was about merging two branches to get the same commit as the other branch

git checkout first branch(chase-branch)
git merge second branch(escaped)
## Exercise 6

This task is about resolving a conflict while merging two branches

git merge another-piece-of-work
nano equation.txt
"removed the extra elements in the text"
git add equation.txt
git commit --no-edit
## Exercise 7

This exercise is about stashing the current work to do another task in the same branch,then go back to the work that was being done and complete the work.

git stash
nano bug.txt
"fix the bug"
git add bug.txt
git commit -m "fixed bug"
git stash pop
nano bug.txt
"added the message finally, finished it!"
git add bug.txt
git commit -m "add the bug file"
## Exercise 8

it is to move a branch to a second branch.

git rebase hot-bugfix(second branch)
## Exercise 9

This exercise is about removing the a file which is not tracked by .gitignore file

git rm 'ignored.txt'
git commit -m "deleted the file"
## Exercise 10

This exercise is about renaming a file name from File.txt to file.txt

git mv File.txt file.txt
git add File.txt
git rm file.txt
git commit -m "renamed the file"
## Exercise 11

This exercise is about editing a file in the last commit and removing the error in the message of the commit.

nano file.txt
"fixed the error"
git add file.txt
git commit --amend
"changed the name of the commit"
## Exercise 12

This exercise is about changing the date of the last commit .

git commit --amend --no-edit --date="1987"
## Exercise 13

This exercise is about editing the file named ‘file.txt’ where a commit is done after the file’s committed .

git rebase -i HEAD~2
'changed the pick to edit of the second last commit' then saved the file
nano file.txt
git add file.txt
git commit --amend
"change the typo error in the commit message"
nano file.txt 
"resolve the conflict"
git add file.txt
git commit --amend
git rebase --continue
## Exercise 14

This exercise is about finding the commit which was edited using ‘’- - amend’’ . After finding the commit that has been commit at the end.

git reflog
git reset --hard HEAD@{1}
## Exercise 15

This exercise is about committing two files seperately which was commit together.

git reset HEAD~
git add first.txt
git commit -m "first"
git add second.txt
git commit -m "second"
## Exercise 16

This exercise is about merging two commit into one commit.

git log -2
git rebase -i HEAD~2
"change the pick to squash in the second last commit"
## Exercise 17

This exercise is about adding an executable bit so that script .sh can be launched.

git add script.sh
git update-index --chmod=+x script.sh
git commit -m "add execute permission"
## Exercise 18

This exercise is about seperating the lines in a file in such a way that it contain the word “Task 1” or not.

git add -p file.txt
"press s to split the file into 4 parts.
press 'y' to stage the part with the word Task 1 in it and 'n' if there is none.
git add file.txt
git commit -m "lines containing Task 1"
git add -p file.txt
"press "y" if there is no "Task 1" word and "n" if any
git add file.txt
git commit -m "lines not containing Task 1"
## Exercise 19

This exercise is about adding commits from different branches.

git checkout feature-a
git log
"copy the hash code "
git checkout pick-your-features
git cherry-pick hash code of feature-a commit
git checkout feature-b
git log
"copy the hash code"
git checkout pick-your-features
git cherry-pick hash code of feature-b commit
git checkout feature-c
git log
"copy the hash code "
git checkout pick-your-features
git cherry-pick hash code of feature-c commit
nano program.txt
resolve the merge-conflict
git add program.txt
git commit -m "add the files from different branches"
## Exercise 20

This exercise is about adding the commit of a branch which is inside another branch ,without adding the contents from the other branch.

git rebase --onto your-master issue-555
nano issue.txt 
resolve the conflict
git add issue.txt
git commit -m "added the rebase-complex branch"
##Exercise 21

This exercise is about rearranging the order of commit so that the last commit and second last commit switch with each other.

git rebase -i HEAD~2
"In the file , rearrange the the commit the order you want it like
2nd commit
1st commit
then save the file"
## Exercise 22

This exercise is about removing the swearwords from the commits and removing them

git log -Sshit
git rebase -i HEAD~83
" change pick to edit of commits returned in the git log -Sshit" then save the file
nano "the file with the swearword"
git add filename
git commit --amend
git rebase --continue
## Exercise 23

This exercise is about find the first commit where the bug was introduced .

git bisect start
git bisect bad
git bisect good 1.0
git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v "jackass"

# link to the blog

https://medium.com/@sreejithmanoj1110/git-journey-fc035d8521c2
