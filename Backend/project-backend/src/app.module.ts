import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TutorialModule } from './tutorial/tutorial.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [UserModule, StudentModule, TeacherModule, TutorialModule, ReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
