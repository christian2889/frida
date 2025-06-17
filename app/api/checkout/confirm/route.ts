import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Verifica que Supabase esté inicializado correctamente
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }

    // Tu lógica de negocio aquí...
    // Ejemplo:
    const { data, error } = await supabase
      .from('tu_tabla')
      .select('*')
    
    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}