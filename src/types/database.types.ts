export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          created_at: string
          id: string
          listing_id: string
          message: string | null
          rating: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          listing_id?: string
          message?: string | null
          rating?: number
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          listing_id?: string
          message?: string | null
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_comments_listing_id_fkey'
            columns: ['listing_id']
            isOneToOne: false
            referencedRelation: 'listings'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_comments_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      favorites: {
        Row: {
          id: string
          listing_id: string
          user_id: string
        }
        Insert: {
          id?: string
          listing_id: string
          user_id: string
        }
        Update: {
          id?: string
          listing_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'favorites_listing_id_fkey'
            columns: ['listing_id']
            isOneToOne: false
            referencedRelation: 'listings'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'favorites_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      listings: {
        Row: {
          comments: string[] | null
          created_at: string
          description: string
          id: string
          location: Json
          photos: string[] | null
          price: number
          rating: number | null
          title: string
          user_id: string
        }
        Insert: {
          comments?: string[] | null
          created_at?: string
          description?: string
          id?: string
          location?: Json
          photos?: string[] | null
          price?: number
          rating?: number | null
          title?: string
          user_id: string
        }
        Update: {
          comments?: string[] | null
          created_at?: string
          description?: string
          id?: string
          location?: Json
          photos?: string[] | null
          price?: number
          rating?: number | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'listings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          about: string | null
          avatar_url: string | null
          contact: number
          email: string
          id: string
          name: string
          role: string
          university: string | null
          username: string
        }
        Insert: {
          about?: string | null
          avatar_url?: string | null
          contact?: number
          email?: string
          id?: string
          name?: string
          role?: string
          university?: string | null
          username?: string
        }
        Update: {
          about?: string | null
          avatar_url?: string | null
          contact?: number
          email?: string
          id?: string
          name?: string
          role?: string
          university?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never
