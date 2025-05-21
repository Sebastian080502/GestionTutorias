import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TutoriaModule } from './tutoria/tutoria.module';
import { TutorialModule } from './tutorial/tutorial.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [UserModule, StudentModule, TeacherModule, TutoriaModule, TutorialModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
