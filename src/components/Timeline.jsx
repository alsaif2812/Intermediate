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
                                                            Consulting
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            The foundation of every successful ERP implementation is understanding your unique operations. Our experienced consultants work with you to map your processes, define roles and user permissions, and document the flow for smooth implementation.


                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2">
                                                            <i class="ri-home-3-fill"></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            Customisation & Implementation

                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            Building upon the insights gained in consultation, we transition to implementation, where we expertly merge your unique needs with the ERP &apos; s capabilities. Standard features and modules are our first choice, but for exceptional cases, we design and integrate plug-and-play customizations that ensure seamless future upgrades.

                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2 rounded-full">
                                                            <i class="ri-home-3-fill h-5 w-5 "></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            The Implementation Journey
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody>
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            <ul>
                                                                      <li><strong>Discovery:</strong> Define project scope, milestones, customizations, and expected outcomes.
                                                                      </li>
                                                                      <li><strong>Planning:</strong> Develop a comprehensive strategy for smooth implementation and progress tracking.</li>
                                                                      <li><strong>Analysis & Configuration:</strong> Install and configure the system to mirror your specific processes.
                                                                      </li>
                                                                      <li><strong>Migration & Verification:</strong> Migrate data, map it accurately, and perform thorough verification checks.
                                                                      </li>
                                                                      <li><strong>Testing & Validation:</strong> Test the system across all functionalities, ensuring seamless quote-to-cash flow.
                                                                      </li>
                                                            </ul>
                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2 rounded-full">
                                                            <i class="ri-home-3-fill h-5 w-5 "></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            Training & Deployment
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody>
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            Our comprehensive training equips users to navigate the new ecosystem with confidence. Through interactive sessions and a &apos;train-the-trainer&apos; approach, we empower employees to self-sustain and operate the ERP software independently. With a smooth transition to the live environment, your team will unlock the full potential of the system, driving efficiency and success.
                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                        <TimelineHeader>
                                                  <TimelineIcon className="p-2 rounded-full">
                                                            <i class="ri-home-3-fill h-5 w-5 "></i>                                                            </TimelineIcon>
                                                  <Typography variant="h5" color="blue-gray">
                                                            Ongoing Support
                                                  </Typography>
                                        </TimelineHeader>
                                        <TimelineBody>
                                                  <Typography color="gary" className="font-normal text-gray-600">
                                                            Go live worry-free! Our round-the-clock support puts our 15-year ERP expertise at your fingertips. Our dedicated support team will craft a roadmap tailored to your evolving needs, ensuring your software keeps pace with your success.
                                                  </Typography>
                                        </TimelineBody>
                              </TimelineItem>
                    </Timeline>

          );
}
export default TimelineWithIcon