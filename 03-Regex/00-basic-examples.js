
// Basic Examples of REGEX
// Online:  https://regex101.com/

=============================================================
-specific characters, case sensitive
[aAbB]  <--- search for only the characters inside.



=============================================================
-Ranges
[a-zA-Z]  <--- all leters no matter the case.
[a-zA-Z0-9]  <--- all leters no matter the case & all the numbers



=============================================================
-Negation:
[^0-9] <--- Every thing that is not a number.
[^a-z] <--- Every thing that is not a lowercase letter.

  Note: the carrot only have this negation meaning when is the first character inside the brackets. else: is a character to be match.



=============================================================
-Searching for a dash " - "
[\-] <--- select only the dashes.
[\-a-z]  <--- All dashes and All lowercase letters.
[a-z-]   <--- All dashes and All lowercase letters.



=============================================================
-Matching all characters from spce" " to tilda"~" (this is a selection for the ASKII)
[\ -~] <--- 1st escape the space, the do the match. 
