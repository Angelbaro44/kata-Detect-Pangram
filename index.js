let isPangram = (string) =>[...'qwertyuiopasdfghjklzxcvbnm'].every(x => string.toLowerCase().indexOf(x) !== -1);
