
// Basic Examples of REGEX
// Online:  https://regex101.com/

=============================================================
-specific characters, case sensitive
[aAbB]  <--- search for only the characters inside.



=============================================================
-Ranges
[a-zA-Z]  <--- all leters no matter the case.
[a-zA-Z0-9_]  <--- all leters no matter the case & all the numbers



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



=============================================================
-Alterations
cat | dog | tiger

cat dog tiger lion



=============================================================
-Metacharacters (this list is not complete...)

  " . " The periond means anithing, but if you really want to mathc for the period, then you need to escape it.
 .   <--- Anything get match.
 \.  <--- Only the periods get match
[.]  <--- Only the periods get match


 [a-zA-Z0-9_]  ===  \w   <--- all leters no matter the case & all the numbers
[^a-zA-Z0-9_]  ===  \W   <--- everitthing exept { all leters no matter the case & all the numbers }

 [0-9] ===  \d   <--- Select all the digits.
[^0-9] ===  \D   <--- Match anyting but the digits.

\t    <--- Match "TABS"
\n    <--- Line breaks.
\s    <--- Match all spaces
`\ `  <--- Match all spaces, I wrap it in Backtis  so you can see the spcae but you not need it.
\S    <--- Match anything that is not a "SPACE"
\[\]  <--- Match all opeining and closing square braces.



=============================================================
-Quantifiers:
    Match multiple things at once.

*  <--- Means 0 or more times.
+  <--- Means 1 or more times.
