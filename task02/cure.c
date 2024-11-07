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
void findfile();

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


void highlight() {
    char compare[50];
    char *head[] = {"#include", "return", "do", "switch", "case", "break", "default", "while", "if", "else"};
	char *blue[]={"int", "char", "float", "void","struct"};
    int i = 0;
    char filename[100];
    FILE *pointer;

    printf("Enter the file name: ");
    scanf("%s", filename);

    pointer = fopen(filename, "r");
    if (pointer == NULL) {
        printf("File not found\n");
        return;
    }

    while (fscanf(pointer, "%49s", compare) == 1) {
        int Key = 0;
    
        for (i = 0; i < 10; i++) {
            if (strcmp(compare, head[i]) == 0) {
                Key = 1;
                break;
			}
			if (strcmp(compare,blue[i])==0){
				Key =2;
				break;
            }
        }

        if (Key==1) {
            printf("\033[0;35m%s\n", compare); 
		}
		else if (Key==2){
			printf("\033[0;34m%s\n",compare);
        } 
		else {
            printf("\033[0;37m%s\n", compare); 
        }
    }

    fclose(pointer);
}


void findfile(){
	int num =0;
	char findword[200];
    char string[50];
    char ffile[100] = {0};
        while(ffile[0]!= '0'){	
			FILE *finding;
			printf("enter the file name");
			scanf("%s",findword);
			finding = fopen(findword, "r");
            if (finding == NULL){
                    printf("Error file missing\n");
                    return;
                }
			
            printf("please enter a word(enter 0 to end)\n");
            scanf("%s", ffile);
			printf("words found similar\n");
            while ( fscanf(finding,"%s", string) == 1){
                if(strstr(string, ffile)!=0) {
                    printf("%s\n",string);
					num++;
                }
            }
            printf("The word %s is in the file %s %d times\n",ffile,findword,num );
            num = 0;
            fclose(finding);
        }
        return;


}



void mainmenu(){
	int choice;
	do{
	printf("text editor\n");
	printf("===================================\n");
	printf("0 quit\n");
	printf("1 create file\n");
	printf("2 open file\n");
	printf("3 find no of occurence of word\n");
	printf("4 highlighten text\n");
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
	case 3:
		findfile();
		break;
	case 4:
		highlight();
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