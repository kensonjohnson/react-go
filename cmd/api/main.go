package main

import (
	"fmt"
	"vite-vanilla-and-go/internal/server"
)

func main() {

	server := server.NewServer()

	fmt.Println("Server started at http://localhost:8080")
	err := server.ListenAndServe()
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
