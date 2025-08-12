"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail, User } from "lucide-react"
import { joinWaitlist } from "@/lib/actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Inscription en cours...
        </>
      ) : (
        <>
          <Mail className="mr-2 h-5 w-5" />
          Rejoindre la Liste d'Attente
        </>
      )}
    </Button>
  )
}

export default function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, null)

  return (
    <div className="max-w-md mx-auto">
      <form action={formAction} className="space-y-6">
        {state?.error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-center">
            {state.error}
          </div>
        )}

        {state?.success && (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl text-center">
            {state.success}
          </div>
        )}

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom (optionnel)"
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg focus:border-red-500/50 focus:ring-red-500/25"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              required
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg focus:border-red-500/50 focus:ring-red-500/25"
            />
          </div>
        </div>

        <SubmitButton />

        <p className="text-sm text-gray-400 text-center">
          En vous inscrivant, vous acceptez de recevoir des mises à jour sur Mordu Sport. Pas de spam, promis !
        </p>
      </form>
    </div>
  )
}
