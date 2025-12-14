namespace Subjects {
  export interface Subject {
    setTeacher(teacher:Teacher): void;
    teacher: Teacher;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

