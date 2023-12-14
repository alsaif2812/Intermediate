import {
          Timeline,
          TimelineItem,
          TimelineConnector,
          TimelineHeader,
          TimelineIcon,
          TimelineBody,
          Typography,
} from "@material-tailwind/react";

function TimelineWithIcon() {
          return (

                    <Timeline className="md:w-[50rem]">
                              <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2">
                                                            <i class="ri-home-3-fill"></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            Timeline Title Here.
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            The key to more success is to have a lot of pillows. Put it this way, it took me
                                                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                                            luv.
                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2">
                                                            <i class="ri-home-3-fill"></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            Timeline Title Here.
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            The key to more success is to have a lot of pillows. Put it this way, it took me
                                                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                                            luv.
                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2 rounded-full">
                                                            <i class="ri-home-3-fill h-5 w-5 "></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            Timeline Title Here.
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody>
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            The key to more success is to have a lot of pillows. Put it this way, it took me
                                                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                                            luv.
                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                    </Timeline>

          );
}
export default TimelineWithIcon