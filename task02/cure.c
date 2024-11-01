#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <termios.h>

void createNewFile();
void openFile();
void mainmenu();
void raw_mode();
void normal_mode();
void highlight();
void white();

int main(){
	raw_mode();
	mainmenu();
	return 0;
}

struct termios real;
void normal_mode(){
	tcsetattr(STDIN_FILENO,TCSAFLUSH,&real);

}

void raw_mode(){
	struct termios raw = real;
	tcgetattr(STDIN_FILENO,&raw);
	tcgetattr(STDIN_FILENO, &real);
	atexit(normal_mode);
	raw.c_lflag &= ~(ICANON);
	raw.c_cc[VTIME]=1;
	raw.c_cc[VMIN]=1;
	
	tcsetattr(STDIN_FILENO,TCSAFLUSH,&raw);
	return;
}

// void highlight(char str){
// 	char *head[]={"#include","return","do","switch","case","break","default","while","if","else"};
// 	int i=0;
// 	while(head[i]){
// 		if(strcmp(head[i],str)==0){
// 			printf("\033[0;35m");
// 		}
// 	}

// }


// void white(char str){
// 	printf("\033[0;37m]");
// }

void mainmenu(){
	int choice;
	do{
	printf("text editor\n");
	printf("===================================\n");
	printf("0 quit\n");
	printf("1 create file\n");
	printf("2 open file\n");
	printf("====================================\n");
	printf("enter your choice\n");
	scanf("%d",&choice);

	switch(choice){
	case 1:
		createNewFile();
		break;
	case 2:
		openFile();
		break;
	default:
		printf("you have exited the editor\n");
	}
	getchar();
	}while(choice!=0);
}

void createNewFile(){
	char newfile [2000];
	char textfile [2000];
	FILE* text;
	printf("enter new file name\n");
	scanf("%s",newfile);
	text=fopen(newfile,"w");
	printf("text to be entered into the file\n");
	scanf("%s",textfile);
	if (strlen(textfile)>0){
		fputs(textfile,text);
		fputs("\n",text);
	}
	if (text == NULL){
		printf("file cannot be created\n");
		return;
	}
	else{
		printf("file created successfully\n");
	}
	fclose(text);
	return;
}


void openFile(){
	char filename[100];
	FILE* pointer;
	printf("enter the file name");
	scanf("%s",filename);
	pointer= fopen(filename,"r");
	if (pointer == NULL){
		printf("file not found\n");
		return;
	}
	char ch;
	printf("content\n");
	while ((ch = fgetc(pointer))!= EOF){
		putchar(ch);
	}
	fclose(pointer);
}