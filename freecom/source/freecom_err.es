# $Id$
#
# Critical error national customization file
#
#       Language:    8bit CP850, CP858 Spanish (Spain)
#       Author:      FreeCOM maintainer
#       Translation: Aitor SANTAMARIA MERINO
# 
# The critical error (criter) handler receives some information
# from the kernel about what error condition happens, generates some
# human friendly message from it, requests the user's opinion about
# how to proceed and, finally, returns to the kernel.
# 
# The human friendly message is generated using one of the following
# templates:
# BLOCK_DEVICE (for criters on block devices)
# 	Error %1 drive %A: %2 area: %3
# -and- CHAR_DEVICE (for criters on character devices)
# 	Error %1 device %A: %3
# 
# Two-character sequences, which first character is a percent sign '%',
# are placeholders for other information:
# %% -> a single percent sign
# %1 -> either READ or WRITE, depending on what kind of operation
# 	caused the criter
# %2 -> the kind of area the criter took place on DOS, FAT, ROOT, or DATA
# %3 -> the actual error string; these are the strings associated to
# 	a number 0 through N, and must correspond to the number passed in
# 	lowbyte(DI) to the criter handler (see RBIL INT-24 for details)
# %A -> drive letter (for block devices); name of device (character devices)
# 
# Below the line describing the error the user is prompted for the action
# to proceed. This line is dynamically constructed depending on which
# action are available at all. The full line may look like this:
# 	(A)bort, (I)gnore, (R)etry, (F)ail?_
# 
# The individual words are defined by ABORT, IGNORE, RETRY, FAIL. They
# should indicate which user response keys is associated with them;
# suggested is to use the first letter and enclose it in parenthesises.
# The delimiter ", " can be defined with DELIMITER and is the same
# for all slots.
# The "? " sequence is defined by QUESTION.
# The order of the actions is fixed and cannot be customized.
# 
# With each action a number of user response keys must be associated.
# They can be enumerated with the KEYS_ABORT, KEYS_IGNORE, ...
# strings. Because the key is searched in the same format as returned
# by INT-16-00, both upper and lower case must be specified and
# certain special keys cannot be used.
# 
# The individual error strings are defined by the #: lines, where
# the hash sign '#' refers to the number the kernel passes to the
# criter handler. The UNKNOWN string is displayed for all error
# numbers not specified.
#
# NOTE #1: The percent rule applies to _all_ criter strings!
# NOTE #2: Each string occupies exactly one line.
# NOTE #3: Any leading or trailing whitespaces are removed. Prefix the
#	first or suffix the last whitespace with '%.' (one percent sign and
#	one dot). This sequence is removed from the string totally.
# NOTE #4: To embed any character use: %&## (one percent sign,
#		one ampersand and exactly two hexa-decimal digits)

## Primary strings
S2
BLOCK_DEVICE: Error %1 en unidad %A: %2  rea: %3
S3
CHAR_DEVICE: Error %1 en dispositivo %A: %3

## kind of operation
S0
READ: leyendo desde
S1
WRITE: escribiendo a

## kind of failed area of block devices
S4
DOS: DOS
S5
FAT: FAT
S6
ROOT: ra¡z
S7
DATA: datos

## action strings
S8
IGNORE: (I)gnorar
S9
RETRY: (R)eintentar
S10
ABORT: (A)bortar
S11
FAIL: (F)allo
## keys associated with the actions
S14 (compacted)
KEYS_IGNORE: iI
KEYS_RETRY:  rR
KEYS_ABORT:  aA
KEYS_FAIL:   fF
## embedded strings
S12
QUESTION:  ? %.
S13
DELIMITER: , %.

## Error strings
UNKNOWN: C¢digo de error desconocido
S15
0: intento de violaci¢n de la protecci¢n contra escritura
1: unidad no v lida para este dispositivo
2: unidad no lista
3: instrucci¢n desconocida para el controlador
4: error de datos (error en CRC)
5: longitud err¢nea de la estructura de petici¢n al controlador
6: error de b£squeda
7: tipo de soporte desconocido
8: sector no encontrado
9: la impresora no tiene papel
10: error de escritura
11: error de lectura
12: error general
13: violaci¢n de permisos de archivo compartido
14: violaci¢n de protecci¢n
15: cambio en disco no v lido
16: FCB no est  disponible
17: desbordamiento del buffer de acceso compartido
18: el c¢digo de p gina no concuerda
19: fuera de la entrada
20: espacio en disco insuficiente
