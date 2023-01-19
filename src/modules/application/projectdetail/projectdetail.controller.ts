import { Controller, Get } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { HttpResponse } from "../../shared/core/core.dtos";
import { GetProjectDetailQueryRequest } from "./cqrs/queries/requests/get-project-detail-query.request";
import { ProjectDetailItemDto } from "./dtos/project-detail-item.dto";
import { Kafka, logLevel } from 'kafkajs';

/**
 * @class ProjectDetailController ProjectDetail API for project-detail data management.
 * @author Patrik Duch
 */
@ApiTags("ProjectDetail")
@Controller({
  path: "/projectdetail",
})
export class ProjectDetailController {

  private readonly kafka: Kafka;

  constructor(private readonly queryBus: QueryBus) {
    this.kafka = new Kafka({
      logLevel: logLevel.WARN,
      clientId: 'test-topic',
      brokers: ['kafka:9092'],
    })
  }


  @Get()
  async getProjectDetails(): Promise<HttpResponse<ProjectDetailItemDto>> {

    const producer = this.kafka.producer()

    await producer.connect()
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })

    await producer.disconnect()

    const consumer = this.kafka.consumer({ groupId: 'test-group' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
          topic,
          partition
        })
      },
    })

    return await this.queryBus.execute(new GetProjectDetailQueryRequest());
  }
}
