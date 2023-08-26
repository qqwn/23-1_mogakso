module.exports = {
    "/login": {
      get: {
        tags: ["User Controller"],
        summary: "사용자 로그인 여부 확인",
        description: "사용자 로그인(id, password)",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  username: {
                    type: "string",
                    description: "사용자 id",
                    example: "qwer1234",
                  },
                  password: {
                    type: "string",
                    description: "사용자 패스워드",
                    example: "123456789",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "사용자 로그인 성공",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    result: {
                      type: "object",
                      properties: {
                        code: {
                          type: "number",
                          description: "code",
                          example: 200,
                        },
                        message: {
                          type: "string",
                          description: "성공 메시지",
                          example: "success",
                        },
                        data: {
                          type: "array",
                          description: "data",
                          example: [],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: '로그인 실패',
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    result: {
                      type: "object",
                      properties: {
                        code: {
                          type: "number",
                          description: "code",
                          example: 401,
                        },
                        message: {
                          type: "string",
                          description: "실패 메시지",
                          example: "fail",
                        },
                        data: {
                          type: "array",
                          description: "data",
                          example: [],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    post: {
        tags: ["User Controller"],
        summary: "사용자 로그인 (id, password) 전달",
        description: "사용자 로그인(id, password)",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  username: {
                    type: "string",
                    description: "사용자 id",
                    example: "qwer1234",
                  },
                  password: {
                    type: "string",
                    description: "사용자 패스워드",
                    example: "123456789",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "사용자 로그인 성공",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    result: {
                      type: "object",
                      properties: {
                        code: {
                          type: "number",
                          description: "code",
                          example: 200,
                        },
                        message: {
                          type: "string",
                          description: "성공 메시지",
                          example: "success",
                        },
                        data: {
                          type: "array",
                          description: "data",
                          example: [],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: '로그인 실패',
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    result: {
                      type: "object",
                      properties: {
                        code: {
                          type: "number",
                          description: "code",
                          example: 401,
                        },
                        message: {
                          type: "string",
                          description: "실패 메시지",
                          example: "fail",
                        },
                        data: {
                          type: "array",
                          description: "data",
                          example: [],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
    
  