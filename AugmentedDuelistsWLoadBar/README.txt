SHORT VERSION -
Changed when instructions appear.
New instruction button.
Loading bar for the monster markers works perfectly.
Painstakingly fixed the loading bar for the attack markers.


LONG VERSION - 
Instructions can now be updated without enabling them.

Loading bar for the markers is a child object. 
Has a script for changing how much the bar is loaded.

This is called from attackcardreceiver and monstercardreceiver.

It worked absolutely perfectly for the monster markers.
But for some reason it had a problem with the attack cards.

It wasn't a problem with the scripts, swapping the markers used by each script still made them work fine.

I didn't understand it at first. I've solved it now and I feel like I understand it even less than I did then.

For some reason there's an offset when it loads any child object of the attack cards. Even when the transform position of the child object is set to 0.
So I had to move it really far to the left to make ti appear on screen.

It doesn't work exactly right, but as long as it works I can't really care anymore.