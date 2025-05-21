"use client"

import { useState } from "react"
import { ArrowRight, Code, Moon, Sun, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import CodeBlock from "@/components/code-block"
import { exerciseData } from "@/lib/exercise-data"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeExercise, setActiveExercise] = useState(1)
  const [exerciseResults, setExerciseResults] = useState<Record<number, string[]>>({})

  // Exercise 1 state
  const [numberInput, setNumberInput] = useState<number>(10)

  // Exercise 4 state
  const [age, setAge] = useState<number>(18)
  const [hasTicket, setHasTicket] = useState<boolean>(true)

  // Exercise 5 state
  const [isRaining, setIsRaining] = useState<boolean>(false)
  const [hasUmbrella, setHasUmbrella] = useState<boolean>(true)

  const runExercise = (exerciseId: number) => {
    const results: string[] = []

    switch (exerciseId) {
      case 1:
        // Count even numbers
        for (let i = 0; i <= numberInput; i++) {
          if (i % 2 === 0) {
            results.push(i.toString())
          }
        }
        break
      case 2:
        // Object destructuring
        const livro = {
          titulo: "JavaScript Essencial",
          autor: "Alana Souza",
          ano: 2024,
          sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          editora: "Mundo Dev",
        }
        const { titulo, ano } = livro
        results.push(`Título: ${titulo}`)
        results.push(`Ano: ${ano}`)
        break
      case 3:
        // Spread operator
        const frutas = ["maçã", "banana"]
        const frutasAdicionais = ["laranja", "abacaxi"]
        const todasAsFrutas = [...frutas, ...frutasAdicionais]
        results.push(`Array original: ${frutas.join(", ")}`)
        results.push(`Todas as frutas: ${todasAsFrutas.join(", ")}`)
        break
      case 4:
        // Access verification
        if (age >= 18 && hasTicket) {
          results.push("Acesso permitido")
        } else {
          results.push("Acesso negado")
        }
        break
      case 5:
        // Weather warning
        if (isRaining || !hasUmbrella) {
          results.push("Leve um guarda-chuva!")
        } else {
          results.push("Tudo certo, pode sair tranquilo")
        }
        break
    }

    setExerciseResults({
      ...exerciseResults,
      [exerciseId]: results,
    })
  }

  return (
    <main className="min-h-screen p-4 md:p-8 transition-colors">
      <div className="container mx-auto max-w-6xl">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Exercícios JavaScript
            </h1>
            <p className="text-muted-foreground mt-2">Interaja com os exercícios e veja os resultados em tempo real</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              <span className="hidden md:inline">Ver no GitHub</span>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-4">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/20 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Navegação</h2>
              <div className="space-y-2">
                {exerciseData.map((exercise) => (
                  <Button
                    key={exercise.id}
                    variant={activeExercise === exercise.id ? "default" : "outline"}
                    className={cn(
                      "w-full justify-start gap-2 transition-all",
                      activeExercise === exercise.id ? "bg-gradient-to-r from-purple-600 to-pink-600" : "",
                    )}
                    onClick={() => setActiveExercise(exercise.id)}
                  >
                    <div className="bg-background/20 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {exercise.id}
                    </div>
                    <span className="truncate">{exercise.title}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Card className="border-purple-500/20">
              <CardHeader className="pb-3">
                <CardTitle>Sobre o Projeto</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Este projeto demonstra 5 exercícios de JavaScript com conceitos modernos:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Arrow Functions</li>
                  <li>Desestruturação</li>
                  <li>Operador Spread</li>
                  <li>Operadores lógicos</li>
                  <li>Condicionais</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <Code className="h-4 w-4" />
                  Ver código completo
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-8">
            {exerciseData.map((exercise) => (
              <div key={exercise.id} className={activeExercise === exercise.id ? "block" : "hidden"}>
                <Card className="border-purple-500/20 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-purple-500/20">
                    <div className="flex justify-between items-center">
                      <CardTitle>{exercise.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300">
                          Exercício {exercise.id}
                        </span>
                      </div>
                    </div>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Tabs defaultValue="interact">
                      <TabsList className="mb-4">
                        <TabsTrigger value="interact">Interagir</TabsTrigger>
                        <TabsTrigger value="code">Ver Código</TabsTrigger>
                      </TabsList>

                      <TabsContent value="interact" className="space-y-4">
                        {exercise.id === 1 && (
                          <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                              <Label htmlFor="number-input">Digite um número inteiro positivo:</Label>
                              <div className="flex gap-2">
                                <Input
                                  id="number-input"
                                  type="number"
                                  value={numberInput}
                                  onChange={(e) => setNumberInput(Number.parseInt(e.target.value) || 0)}
                                  min={0}
                                />
                                <Button onClick={() => runExercise(1)}>Executar</Button>
                              </div>
                            </div>
                          </div>
                        )}

                        {exercise.id === 2 && (
                          <div className="space-y-4">
                            <div className="bg-muted p-4 rounded-md">
                              <pre className="text-sm">
                                {`const livro = {
  titulo: "JavaScript Essencial",
  autor: "Alana Souza",
  ano: 2024,
  sinopse: "Lorem ipsum dolor sit amet...",
  editora: "Mundo Dev"
};`}
                              </pre>
                            </div>
                            <Button onClick={() => runExercise(2)}>Executar Desestruturação</Button>
                          </div>
                        )}

                        {exercise.id === 3 && (
                          <div className="space-y-4">
                            <div className="bg-muted p-4 rounded-md">
                              <pre className="text-sm">
                                {`const frutas = ["maçã", "banana"];
const frutasAdicionais = ["laranja", "abacaxi"];`}
                              </pre>
                            </div>
                            <Button onClick={() => runExercise(3)}>Combinar Arrays</Button>
                          </div>
                        )}

                        {exercise.id === 4 && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="age-input">Idade:</Label>
                                <Input
                                  id="age-input"
                                  type="number"
                                  value={age}
                                  onChange={(e) => setAge(Number.parseInt(e.target.value) || 0)}
                                  min={0}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Tem Ingresso?</Label>
                                <div className="flex items-center space-x-2">
                                  <Switch checked={hasTicket} onCheckedChange={setHasTicket} />
                                  <Label>{hasTicket ? "Sim" : "Não"}</Label>
                                </div>
                              </div>
                            </div>
                            <Button onClick={() => runExercise(4)}>Verificar Acesso</Button>
                          </div>
                        )}

                        {exercise.id === 5 && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>Está Chovendo?</Label>
                                <div className="flex items-center space-x-2">
                                  <Switch checked={isRaining} onCheckedChange={setIsRaining} />
                                  <Label>{isRaining ? "Sim" : "Não"}</Label>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label>Tem Guarda-Chuva?</Label>
                                <div className="flex items-center space-x-2">
                                  <Switch checked={hasUmbrella} onCheckedChange={setHasUmbrella} />
                                  <Label>{hasUmbrella ? "Sim" : "Não"}</Label>
                                </div>
                              </div>
                            </div>
                            <Button onClick={() => runExercise(5)}>Verificar Aviso</Button>
                          </div>
                        )}

                        {exerciseResults[exercise.id] && (
                          <div className="mt-6">
                            <Separator className="my-4" />
                            <h3 className="text-lg font-medium mb-2">Resultado:</h3>
                            <div className="bg-muted p-4 rounded-md">
                              {exerciseResults[exercise.id].map((result, index) => (
                                <div key={index} className="py-1">
                                  <span className="text-purple-500 dark:text-purple-400">{">"}</span> {result}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </TabsContent>

                      <TabsContent value="code">
                        <CodeBlock code={exercise.code} language="javascript" />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                    <Button
                      variant="ghost"
                      onClick={() => setActiveExercise(Math.max(1, activeExercise - 1))}
                      disabled={activeExercise === 1}
                    >
                      Anterior
                    </Button>
                    <Button
                      className="gap-1"
                      onClick={() => setActiveExercise(Math.min(5, activeExercise + 1))}
                      disabled={activeExercise === 5}
                    >
                      Próximo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Desenvolvido com Next.js, Tailwind CSS e shadcn/ui</p>
          <p className="mt-1">© {new Date().getFullYear()} - Exercícios JavaScript</p>
        </footer>
      </div>
    </main>
  )
}
